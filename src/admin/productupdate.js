import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './User_info.css'
import React, { useEffect, useState } from 'react';

const Prod_update= () => {


  const [ProductData, setProductData] = useState([]);

  const [team_id, setTeam_id] = useState('');
  const [category, setCategory] = useState('');
  const [sub_category, setSub_category] = useState('');
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [id, setId] = useState('')

  const handleImageInputChange = (e) => {
    setImage(e.target.files[0].name);
    setSelectedImage(e.target.files[0]);
  };

  const handleAdd = async (event) => {

    event.preventDefault();

    let productDetails = new FormData();


    if (team_id) {
      productDetails.append("team_id", team_id);
    }
    if (category) {
      productDetails.append('category', category);
    }
    if (sub_category) {
      productDetails.append('sub_category', sub_category);
    }
    if (selectedImage) {
      productDetails.append('image', selectedImage);
    }
    if (description) {
      productDetails.append('description', description);
    }
    if (id) {
      productDetails.append('id', id);
    }

    var config = { headers: { enctype: "multipart/form-data" } };

    await axios
      .post(
        'http://localhost:3005/Update',
        productDetails,
        config
      )

      .then(function (response) {
        if (response) {
          window.location.reload();
          // fetchProductData();
          // setTeam_id('');
          // setCategory('');
          // setSub_category('');
          // setDescription('');



        }
      })
      .catch(function (error) {
        alert('error');
        window.location.reload();
      })
  }


  const fetchProductData = async () => {
    try {
      const response = await fetch('http://localhost:3005/prodget');
      if (response.ok) {
        const data = await response.json();
        setProductData(data);
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProductData();

  }, []);

  return (
    <>
      <div>
        

        <h2 style={{ textAlign: 'center', marginTop: '3%' }}>Product Update</h2>
        <a href="/Product_info"><button  className='UPBTNn'  >Back</button></a>

        <h4 style={{ textAlign: 'start', marginBottom: '1%', color: '#093e40', marginLeft: "2%" }}>Update Details</h4>
        <div className="container-fluid">
          <div className="row">
            <form onSubmit={handleAdd}>
              <div className="col-lg-12" style={{ marginLeft: "1%" }} >
                 <input
                  type="number"
                  placeholder="ID"
                  value={id}
                  style={{ marginLeft: '10px' }}
                  onChange={(e) => setId(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Team ID"
                  value={team_id}
                  style={{ marginLeft: '10px' }}
                  onChange={(e) => setTeam_id(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={category}
                  style={{ marginLeft: '10px' }}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Sub Category"
                  value={sub_category}
                  style={{ marginTop: '6px', marginLeft: '10px' }}
                  onChange={(e) => setSub_category(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  style={{ marginLeft: '10px' }}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="file"
                  placeholder=" Image"
                  name='image'
                  style={{ marginLeft: '10px', marginTop: '6px', border: 'none' }}
                  onChange={(e) => handleImageInputChange(e)}
                />
               
              </div>
              <button type='submit' className='btn1 mb-3 text-center' style={{ marginLeft: "80%" }} >Add</button>
            </form>
            <div className="col-lg-12 table-responsive">
              <table className="table table-hover text-wrap text-start">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Team ID</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created On</th>
                    {/* <th>Update</th> */}
                  </tr>
                </thead>
                <tbody>
                  {ProductData.map((prod) => {
                    const dt = prod.created_on;
                    const dateFormat = dt.slice(0, 10);
                    const dateFormarReverse = dateFormat.split('-').reverse().join("-");
                    return (
                      <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.team_id}</td>
                        <td>{prod.category}</td>
                        <td>{prod.sub_category}</td>
                        <td>{prod.image}</td>
                        <td>{prod.description}</td>
                        <td>{prod.status}</td>
                        <td>{dateFormarReverse}</td>
                        {/* <td><button className='btn2' onClick={event => window.location.href = '/Product_update'}
                        ><FontAwesomeIcon icon={faPenToSquare} /></button></td> */}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Prod_update