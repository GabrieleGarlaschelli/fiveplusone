class Loader {
  constructor() {
  }

  initLoading() {
    return new Promise((resolve, reject) => {
      let loader = document.querySelector(".loader")
      if (!document.querySelector(".loader.loading")) {
        loader.classList.add("loading");
      } else {
        reject('already loading')
      }
      setTimeout(() => {
        if(loader) {
          loader.classList.remove("loading");
          resolve()
        } else {
          reject('already loading')
        }
      }, 2000);
    })
  }

  isLoading() {
    return document.querySelector(".loader.loading") != undefined && document.querySelector(".loader.loading") != null
  }
}

export default new Loader()