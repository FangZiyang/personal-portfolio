import { useState, useEffect } from "react"; // 引入 React 的状态和生命周期管理 hooks
import { Col, Row, Alert } from "react-bootstrap"; // 从 react-bootstrap 导入布局和提示组件

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState(''); // 状态变量，用于存储用户输入的邮箱地址

  // 当订阅状态变为成功时，清空输入字段
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  // 提交表单时的处理函数
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止默认表单提交行为
    email && // 检查邮箱是否有值
    email.indexOf("@") > -1 && // 检查邮箱是否包含 "@"
    onValidated({ // 调用父组件的验证函数
      EMAIL: email
    })
  }

  // 清空输入字段
  const clearFields = () => {
    setEmail(''); // 将 email 状态重置为空字符串
  }

  return (
    <Col lg={12}> {/* 使用 Bootstrap 的列组件，占据 12 列空间 */}
    </Col>
)

  // return (
  //     <Col lg={12}> {/* 使用 Bootstrap 的列组件，占据 12 列空间 */}
  //       <div className="newsletter-bx wow slideInUp"> {/* 包裹内容的容器，添加动画类名 */}
  //         <Row> {/* 行组件，用于布局 */}
  //           <Col lg={12} md={6} xl={5}> {/* 第一列，用于显示标题和状态提示 */}
  //             <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3> {/* 标题 */}
  //             {status === 'sending' && <Alert>Sending...</Alert>} {/* 提示发送中 */}
  //             {status === 'error' && <Alert variant="danger">{message}</Alert>} {/* 提示错误信息 */}
  //             {status === 'success' && <Alert variant="success">{message}</Alert>} {/* 提示成功信息 */}
  //           </Col>
  //           <Col md={6} xl={7}> {/* 第二列，用于输入邮箱和提交表单 */}
  //             <form onSubmit={handleSubmit}> {/* 表单提交事件 */}
  //               <div className="new-email-bx"> {/* 包裹输入框和按钮的容器 */}
  //                 <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" /> {/* 邮箱输入框 */}
  //                 <button type="submit">Submit</button> {/* 提交按钮 */}
  //               </div>
  //             </form>
  //           </Col>
  //         </Row>
  //       </div>
  //     </Col>
  // )
}
