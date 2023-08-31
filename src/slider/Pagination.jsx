const Pagination = ({currentIndex, totalImages, onPageChange }) => {
  return (
    <div className='pagination'>
      {Array.from({length: totalImages}).map((span, i) => (
        <span 
          key={i} 
          style={{backgroundColor: i === currentIndex ? 'red' : '#cecece'}}
          onClick={() => onPageChange(i)}
        >
        </span>
      ))}
    </div>
  );
}

export default Pagination;