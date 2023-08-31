const Navigation = ({ onNext, onPrev }) => {
  return (
    <>
      <div className="btn-prev" onClick={onPrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)">
          <path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="rgba(0, 0, 0, 0.9)"></path>
        </svg>
      </div>

      <div className="btn-next" onClick={onNext}>
        <svg width="24" height="24" viewBox="0 0 32 32" fill="rgba(0, 0, 0, 0.9)">
          <path d="M11.943 6.99999L20.9383 15.9953L11.9336 25L12.9943 26.0607L23.0596 15.9953L13.0036 5.93933L11.943 6.99999Z" fill="rgba(0, 0, 0, 0.9)"></path>
        </svg>
      </div>
    </>
  );
}

export default Navigation;