// 引入必要的模块和组件
import { useState, useEffect } from "react"; // React 的状态管理和副作用处理 Hooks
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap 布局组件
import headerImg from "../assets/img/header-img.svg"; // Banner 的头部图片
import { ArrowRightCircle } from 'react-bootstrap-icons'; // Bootstrap 图标
import 'animate.css'; // 动画库
import TrackVisibility from 'react-on-screen'; // 检测元素是否在视口中的库

// 定义 Banner 组件
export const Banner = () => {
  // 定义状态
  const [loopNum, setLoopNum] = useState(0); // 当前循环的索引
  const [isDeleting, setIsDeleting] = useState(false); // 是否处于删除模式
  const [text, setText] = useState(''); // 当前显示的文字
  const [delta, setDelta] = useState(150); // 控制打字速度的时间间隔
  const toRotate = ["Web Developer", "Web Designer", "Backend Developer"]; // 要轮播的文本
  const period = 1000; // 每轮完整显示的停留时间

  // 使用 useEffect 处理定时器
  useEffect(() => {
    let ticker = setInterval(() => {
      tick(); // 每隔 delta 时间调用 tick 函数
    }, delta);

    return () => {
      clearInterval(ticker); // 清除定时器，防止内存泄漏
    };
  }, [text]); // 当 text 状态变化时重新运行

  // tick 函数用于更新文字内容
  const tick = () => {
    let i = loopNum % toRotate.length; // 计算当前要显示的文本索引
    let fullText = toRotate[i]; // 获取当前完整文本
    // 根据 isDeleting 状态，决定是增加还是删除字符
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText); // 更新 text 状态

    if (isDeleting) {
      setDelta(100); // 删除时速度更快
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // 切换到删除模式
      setDelta(period); // 设置停留时间
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false); // 重置到下一个文字
      setLoopNum(loopNum + 1);
      setDelta(150); // 恢复打字速度
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Ryan(Ziyang)`}{' '}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Backend Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Master of Engineering student specializing in distributed systems and backend development.
                    Experienced in building scalable microservices with Spring Boot, Redis, and RabbitMQ.
                    Previously at Meituan.
                  </p>

                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
