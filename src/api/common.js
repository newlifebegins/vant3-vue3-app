/**
 * 请求统一管理
 */
import Request from "../config/request";

/* 登录 */
export const dingTalkLogin = (data) => Request.get("/App/DingTalkLogin", data);
