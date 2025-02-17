import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
 <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.cmtc.ac.th/" target="blank">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://getbootstrap.com/docs/5.3/components/carousel/" target="_blank">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.youtube.com/" target="_blank">Servic</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://open.spotify.com/" target="blank">Contact </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Sing In</button>
        <button className="btn btn-outline-success" type="submit">Sing</button>
      </form>
    </div>
  </div>
</nav>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3" className="d-block w-100" width="600px" hidden="500px" />
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/51y8GUVKJoL.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/02/35/78/96/360_F_235789662_9tKzoDqDUHh6ctZQ2pSWFTKnuBuZmBwl.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<div className="row">
      <div className="col-4 text center" >
          <div className="card" style={{width: '34rem'}}>
           <img src="https://th.bing.com/th/id/OIP.cbNhNxukDMlsNAWqzOeVbAHaEc?w=290&h=180&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Snoop Dog</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
          </div>
              </div>
      <div className="col-4 text center" >
          <div className="card" style={{width: '34rem'}}>
            <img src="https://d3nxoulyw7bc8u.cloudfront.net/images/artists/2326/fa1a21a8-43be-4e87-b054-9d14fddfc6d6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Wiz Kalifa</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
          </div>
              </div>
      <div className="col-4 text center" >
          <div className="card" style={{width: '34rem'}}>
            <img src="https://th.bing.com/th/id/R.a520ede401fcadea6c0a8743a9dd8751?rik=rvtk1PJBL%2bdN%2bA&pid=ImgRaw&r=0" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lil Mosey</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
          </div>
              </div>
   <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">Â© 2024 Company, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
    </ul>
  </footer>
</div>
</div>
   
</>
  );
}
