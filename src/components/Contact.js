// 导入必要的模块和组件
import { useState } from "react"; // React 的状态管理 Hook
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap 布局组件
import contactImg from "../assets/img/contact-img.svg"; // 联系页面的图片
import 'animate.css'; // 动画库，用于实现页面元素的动画效果
import TrackVisibility from 'react-on-screen'; // 检测元素是否在视口中的库

export const Contact = () => {
  // 定义表单的初始值对象
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  // 定义状态：
  const [formDetails, setFormDetails] = useState(formInitialDetails); // 管理表单数据
  const [buttonText, setButtonText] = useState('Send'); // 按钮文本
  const [status, setStatus] = useState({}); // 提交后的状态消息（成功或失败）

  // 处理表单数据更新
  const onFormUpdate = (category, value) => {
    // 使用扩展运算符更新指定字段的值
    setFormDetails({
      ...formDetails,
      [category]: value // 更新表单字段
    });
  };

  // 表单提交事件处理函数
  const handleSubmit = async (e) => {
    e.preventDefault(); // 阻止默认表单提交行为
    setButtonText("Sending..."); // 提交时更改按钮文本
    // 发送请求到服务器
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST", // HTTP 方法
      headers: {
        "Content-Type": "application/json;charset=utf-8", // 请求头，表明发送 JSON 数据
      },
      body: JSON.stringify(formDetails), // 请求体，序列化表单数据为 JSON
    });
    setButtonText("Send"); // 重置按钮文本
    let result = await response.json(); // 解析响应为 JSON
    setFormDetails(formInitialDetails); // 重置表单内容
    // 根据响应结果设置状态消息
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully' }); // 成功状态
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' }); // 失败状态
    }
  };

  return (
    // 联系页面的主容器部分
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* 左侧：显示联系图片 */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                // 当图片可见时添加动画效果
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          {/* 右侧：显示表单 */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* 标题 */}
                  <h2>Get In Touch</h2>
                  {/* 表单 */}
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* 输入字段：名字 */}
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      {/* 输入字段：姓氏 */}
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      {/* 输入字段：电子邮件 */}
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      {/* 输入字段：电话号码 */}
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      {/* 输入字段：消息 */}
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        {/* 提交按钮 */}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {/* 状态消息 */}
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
