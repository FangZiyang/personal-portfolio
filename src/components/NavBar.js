import { useState, useEffect } from "react"; // React 的状态管理和生命周期管理 hooks
import { Navbar, Nav, Container } from "react-bootstrap"; // 导入 Bootstrap 的布局和导航组件
import logo from '../assets/img/logo.svg'; // 导入 logo 图片
import navIcon1 from '../assets/img/nav-icon1.svg'; // 导入社交媒体图标 1
import navIcon2 from '../assets/img/nav-icon2.svg'; // 导入社交媒体图标 2
import navIcon3 from '../assets/img/nav-icon3.svg'; // 导入社交媒体图标 3
import navIcon4 from '../assets/img/nav-icon4.svg'; // 导入社交媒体图标 3
import { HashLink } from 'react-router-hash-link'; // 用于平滑滚动的链接组件
import {
  BrowserRouter as Router // 用于管理导航的 Router
} from "react-router-dom";

export const NavBar = () => {
  // 用于管理当前激活的导航链接的状态
  const [activeLink, setActiveLink] = useState('home');
  // 用于跟踪用户是否滚动页面的状态
  const [scrolled, setScrolled] = useState(false);

  // 处理滚动事件的副作用
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) { // 检查滚动位置是否超过 50 像素
        setScrolled(true); // 如果滚动超过 50 像素，则设置为已滚动
      } else {
        setScrolled(false); // 如果滚动回顶部，则设置为未滚动
      }
    }

    // 添加滚动事件监听器
    window.addEventListener("scroll", onScroll);

    // 在组件卸载时移除事件监听器
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // 更新当前激活的导航链接
  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // 将当前激活的链接设置为用户点击的值
  }

  return (
    <Router> {/* 使用 Router 包裹导航栏 */}
      {/* 根据 `scrolled` 状态动态添加类名 */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container> {/* 用于对齐和间距的容器 */}
          <Navbar.Brand href="/"> {/* 品牌 logo */}
            <img src={logo} alt="Logo" style={{ width: "360px", height: "auto" }} /> {/* 显示 logo 图片 */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> {/* 移动端的导航切换按钮 */}
            <span className="navbar-toggler-icon"></span> {/* 切换按钮的图标 */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav"> {/* 可折叠的导航菜单 */}
            <Nav className="ms-auto"> {/* 导航项右对齐 */}
              {/* 导航链接，包含激活状态的样式 */}
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}> {/* 首页链接 */}
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}> {/* 技能链接 */}
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}> {/* 项目链接 */}
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text"> {/* 包含社交图标和按钮的部分 */}
              <div className="social-icon"> {/* 社交媒体图标 */}
                {/* 链接到 LinkedIn */}
                <a href="https://www.linkedin.com/in/ziyang-fang/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                {/* 链接到 GitHub */}
                <a href="https://github.com/FangZiyang" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon4} alt="GitHub" />
                </a>
                {/* 可以继续设置 navIcon3 的链接，例如 Twitter 或其他平台 */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Other Platform" />
                </a> */}
              </div>
              <HashLink to='#connect'> {/* 平滑滚动到 #connect 部分的按钮 */}
                <button className="vvd"><span>Connect</span></button>
              </HashLink>
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
