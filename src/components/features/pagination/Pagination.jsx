import './pagination.css'
const Pagination = ({ totalPhotos, photosPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++){
    pageNumbers.push(i);
  };
  return( <div className='paginate'>
      {pageNumbers.map((number, index) => { return (
      <a className='number' key={index} onClick={()=>paginate(number)}>
       {number}
      </a>
    );
  })}</div>)
};

export default Pagination;
