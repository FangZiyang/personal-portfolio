// 引入 React-Bootstrap 的 Col 组件，用于布局栅格系统
import { Col } from "react-bootstrap";

// 定义 ProjectCard 组件，接收三个 props：title, description, imgUrl
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    // 使用 Bootstrap 的 Col 组件定义卡片的宽度，适配不同屏幕尺寸
    <Col size={12} sm={6} md={4}>
      {/* 卡片的容器，包含图片和文字 */}
      <div className="proj-imgbx">
        {/* 显示项目图片 */}
        <img src={imgUrl} alt={`${title} Thumbnail`} />
        {/* 图片上的文字信息层 */}
        <div className="proj-txtx">
          {/* 项目标题 */}
          <h4>{title}</h4>
          {/* 项目描述 */}
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

