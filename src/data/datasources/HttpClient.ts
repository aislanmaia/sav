import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class HttpClient {
  protected readonly http: AxiosInstance

  public constructor(baseURL = 'http://localhost:3000') {
    this.http = axios.create({
      baseURL,
    })

    this.#initializeResponseInterceptor()
  }

  #initializeResponseInterceptor() {
    this.http.interceptors.request.use(this.#handleRequest, this.#handleError)
    // this.http.interceptors.response.use(this.#handleResponse, this.#handleError)
  }

  #handleRequest = (config: AxiosRequestConfig) => {
    const loggedUserData = JSON.parse(localStorage.getItem('users') ?? '{}')
    const token = loggedUserData?.user?.token
    config.headers = Object.assign({ Authorization: 'Bearer ' + token })

    return config
  }

  #handleResponse = ({ data }: AxiosResponse) => data
  #handleError = (error: AxiosError) => error
}
