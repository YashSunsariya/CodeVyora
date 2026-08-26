function PageLoader({ visible }) {
  return (
    <div className={`page-loader ${visible ? 'page-loader-visible' : 'page-loader-hidden'}`} aria-hidden={!visible}>
      <div className="loader-mark">
        <span className="loader-ring" />
        <img src="/logo1.png" alt="" className="loader-logo" />
      </div>
      <span className="loader-name">Codevyora</span>
      <div className="loader-skeleton" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default PageLoader
