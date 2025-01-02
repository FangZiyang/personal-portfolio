// 引入 MailchimpSubscribe 组件，用于与 Mailchimp 的 API 集成
import MailchimpSubscribe from "react-mailchimp-subscribe";
// 引入自定义的 Newsletter 组件
import { Newsletter } from "./Newsletter";

// 定义 MailchimpForm 组件
export const MailchimpForm = () => {
  // 构造 Mailchimp 的 POST URL，包含动态环境变量
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      {/* 使用 MailchimpSubscribe 组件来处理订阅 */}
      <MailchimpSubscribe
        url={postUrl} // Mailchimp API 的 POST URL
        render={({ subscribe, status, message }) => (
          // 渲染 Newsletter 组件，传递订阅状态和处理函数
          <Newsletter
            status={status} // 当前订阅状态（如 "sending", "success", "error"）
            message={message} // 来自 Mailchimp 的消息
            onValidated={formData => subscribe(formData)} // 当表单被验证时调用订阅函数
          />
        )}
      />
    </>
  );
}
