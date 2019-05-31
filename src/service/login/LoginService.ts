import LoginForm from '@/model/login/LoginForm'
import axios from 'axios'
import LoginFormReq from '@/dto/login/LoginFormReq'
import StorageKeyDefineLogin from '@/define/storage/login'
import UrlDefineUser from '@/define/url/user'
import $store from '@/store'
import NameUtil from '@/utils/NameUtil'
import StoreDefineLogin from '@/define/store/login/login'

export default class LoginService {
  static login (loginForm: LoginForm) {
    return new Promise((resolve, reject) => {
      axios.post(UrlDefineUser.LOGIN, new LoginFormReq(loginForm)).then((resp) => {
        if (resp.data.success) {
          if (loginForm.rememberPassword) {
            localStorage[StorageKeyDefineLogin.LOGIN_FORM_CACHE] = JSON.stringify(loginForm)
          }
          sessionStorage[StorageKeyDefineLogin.LOGIN_TOKEN] = resp.data.data
          this.setStoreLoginState(true)
          resolve()
        }
      }).catch(err => {
        reject(err)
      })
    })
  }

  private static setStoreLoginState (loginState: boolean) {
    $store.commit(NameUtil.CalculateStoreComponentKey(StoreDefineLogin.SET_LOGIN_STATE), loginState)
  }

  static logout () {
    sessionStorage.removeItem(StorageKeyDefineLogin.LOGIN_TOKEN)
    this.setStoreLoginState(false)
  }

  static getLoginState () {
    const loginState = sessionStorage[StorageKeyDefineLogin.LOGIN_TOKEN] !== undefined
    this.setStoreLoginState(loginState)
    return loginState
  }

  static getLoginFormCache (): LoginForm {
    const loginFormCacheStr = localStorage[StorageKeyDefineLogin.LOGIN_FORM_CACHE]
    if (loginFormCacheStr === undefined) {
      return new LoginForm()
    }
    return JSON.parse(loginFormCacheStr)
  }
}
