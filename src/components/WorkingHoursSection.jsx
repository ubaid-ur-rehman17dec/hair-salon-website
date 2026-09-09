const schedule = [
  { day: 'Monday', hours: '09 AM - 09 PM', isOpen: true },
  { day: 'Tuesday', hours: '09 AM - 09 PM', isOpen: true },
  { day: 'Wednesday', hours: '09 AM - 09 PM', isOpen: true },
  { day: 'Thursday', hours: '09 AM - 09 PM', isOpen: true },
  { day: 'Friday', hours: '09 AM - 09 PM', isOpen: true },
  { day: 'Sat / Sun', hours: 'Closed', isOpen: false }
];

export default function WorkingHoursSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 shadow-sm border rounded overflow-hidden">
          <div className="col-lg-6">
            <div className="h-100">
              <img className="img-fluid h-100 w-100" src="/img/open.jpg" alt="Working Hours" style={{ objectFit: 'cover', minHeight: '350px' }} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white h-100 d-flex flex-column justify-content-center p-5">
              <p className="d-inline-flex bg-light text-primary py-1 px-4 me-auto rounded-pill font-weight-bold">Working Hours</p>
              <h1 className="text-uppercase mb-4 text-dark font-weight-bold">Professional Barbers Are Waiting For You</h1>
              <div>
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className={`d-flex justify-content-between ${index !== schedule.length - 1 ? 'border-bottom border-light' : ''} py-3`}
                  >
                    <h6 className="text-uppercase mb-0 text-dark font-weight-bold">{item.day}</h6>
                    <span className={`text-uppercase ${item.isOpen ? 'text-secondary font-weight-bold' : 'text-primary font-weight-bold'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
