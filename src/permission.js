import router from './router'
import { Message } from 'element-ui'
import NProgress from 'nprogress'  //页面跳转进度条
import 'nprogress/nprogress.css'   //进度条样式
NProgress.configure({ showSpinner: false })  //进度条设置
import { getToken } from '@/utils/auth'  //从cookie中获取token
const whiteList = ['/login']  //路由白名单
//路由导航守卫
router.beforeEach(async (to,from,next)=>{
  //启动进度条
  NProgress.start();
  //获取token 判断用户是否登录
  const hasToken = getToken();
  if(hasToken){
    if(to.path === '/login'){
      //如果用户登录后再访问/login 则路由到根页面
      next({path:'/'})
      NProgress.done(); //进度条结束
    }else{
      //根据具体需求再做设置
      console.log(111)
      try {
        next({ to, replace: true })
        NProgress.done(); //进度条结束
      }catch (error) {
        Message.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
        NProgress.done(); //进度条结束
      }

    }
  }else{
    //没有token
    if(whiteList.indexOf(to.path) !== -1){  //路由白名单中的地址 直接路由到该页面
      next();
    }else{
      //没有token 也没有在路由白名单内
      next(`/login?redirect=${to.path}`);
      NProgress.done(); //进度条结束
    }
  }
})
