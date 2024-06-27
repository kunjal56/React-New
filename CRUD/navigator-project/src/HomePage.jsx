import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ posts, handleDelete }) {

    //also add this
    // function handleDeletethis(id){
    //     handleDelete(id)
    // }

    function handleEdit() {

    }

    return (
        <div>

            <div className="container-fluid d-flex justify-content-center align-items-center" id='home'>
                <div className="row">
                    <div className="col-lg-12 text-white ">
                        <div className="text text-center">
                            <h1>Welcome to paradise</h1>
                            <h5 className='mt-3 mb-5'></h5>

                            <div className="addedpost border text-start p-3 ">
                                <h6 className='text-secondary w-100'>Booked room_</h6>
                                {
                                    posts.map((el) => (
                                        <div key={el.id}>

                                            <div className='border shadow-lg rounded rounded-3 p-3' id='addedroom'>
                                                <h4>{el.title}</h4>
                                                <p>{el.content}</p>
                                                <h5>{el.number}</h5>
                                                <h6>date: {el.date}</h6>
                                                <button className='btn btn-dark text-white me-2' onClick={() => handleEdit(el.id)}><Link to={`/edit/:${el.id}`} className='text-decoration-none text-white'>Change-room</Link></button>
                                                <button type='button' className='btn btn-dark text-white' onClick={() => handleDelete(el.id)}>Check-out</button>
                                            </div>

                                            <hr />

                                        </div>
                                    ))
                                }
                            </div>

                            <button className='btn btn-primary mt-3'> <Link to="/add" className='text-white fs-5 text-decoration-none'>add post</Link> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
