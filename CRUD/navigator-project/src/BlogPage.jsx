import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

function BlogPage({ addnewPost }) {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        addnewPost(title, content, number, date);
        setTitle('');
        setContent('');
        setNumber('');
        setDate('')
    }

    return (
        <div>

            <div className="container-fluid text-white" id='book'>
                <div className="row justify-content-center pt-5">
                    <div className="col-lg-8 rounded-3 p-5" id='addbox'>

                        <form action="" onSubmit={handleSubmit}>

                            <h6>City:</h6>
                            <input type="text" className='form-control bg-transparent text-white mb-4' value={title} onChange={(e) => setTitle(e.target.value)} />

                            <h6 className='mt-4'>Facilities:</h6>
                            <textarea value={content} className='form-control mb-4 bg-transparent text-white' onChange={(e) => setContent(e.target.value)} ></textarea>

                            <h6>Total room:</h6>
                            <input type="number" value={number} className='form-control mb-4 bg-transparent text-white' onChange={(e) => setNumber(e.target.value)} />

                                    <h6>Date(from):</h6>
                                    <input type="date" value={date} className='form-control mb-4 bg-transparent text-white me-4' style={{ width: "275px" }} onChange={(e) => setDate} />
                                    <h6>To:</h6>
                                    <input type="date" value={date} className='form-control mb-4 bg-transparent text-white' style={{ width: "275px" }} onChange={(e) => setDate} />
                                    <h6>Members</h6>
                                    <input type="number" className='form-control mb-4  bg-transparent text-white' style={{ width: "275px" }} onChange={(e) => setDate} />

                            <button type='submit' className='btn border text-white mt-3'>Add to Book</button>
                            <Link to='/' className='btn btn-primary text-white mt-3 pb-2' style={{ marginLeft: "380px", fontSize: "20px" }}><CiLogout className='fw-bold' /></Link>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default BlogPage;
