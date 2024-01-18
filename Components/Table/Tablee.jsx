import React from "react";

function Tablee() {
    let data = [{
        "id": 1,
        "first_name": "Edmund",
        "last_name": "Laurenz",
        "email": "elaurenz0@eepurl.com",
        "gender": "Male",
        "phone": "+55 811 275 9790"
      }, {
        "id": 2,
        "first_name": "Bertrando",
        "last_name": "Tchaikovsky",
        "email": "btchaikovsky1@typepad.com",
        "gender": "Male",
        "phone": "+33 925 511 6563"
      }, {
        "id": 3,
        "first_name": "Angelika",
        "last_name": "Dearlove",
        "email": "adearlove2@slashdot.org",
        "gender": "Female",
        "phone": "+63 408 844 3636"
      }, {
        "id": 4,
        "first_name": "Corella",
        "last_name": "Milbourn",
        "email": "cmilbourn3@tinyurl.com",
        "gender": "Female",
        "phone": "+86 322 899 6680"
      }, {
        "id": 5,
        "first_name": "Tremayne",
        "last_name": "MacArthur",
        "email": "tmacarthur4@51.la",
        "gender": "Male",
        "phone": "+351 648 166 1977"
      }, {
        "id": 6,
        "first_name": "Cullan",
        "last_name": "Kinchley",
        "email": "ckinchley5@engadget.com",
        "gender": "Male",
        "phone": "+62 529 208 7398"
      }, {
        "id": 7,
        "first_name": "Isak",
        "last_name": "Huey",
        "email": "ihuey6@slate.com",
        "gender": "Male",
        "phone": "+66 824 319 3494"
      }, {
        "id": 8,
        "first_name": "Elwin",
        "last_name": "Girdlestone",
        "email": "egirdlestone7@usda.gov",
        "gender": "Male",
        "phone": "+49 867 675 5286"
      }, {
        "id": 9,
        "first_name": "Saxe",
        "last_name": "McCalum",
        "email": "smccalum8@acquirethisname.com",
        "gender": "Male",
        "phone": "+86 825 397 3456"
      }, {
        "id": 10,
        "first_name": "Lyn",
        "last_name": "McNeice",
        "email": "lmcneice9@marriott.com",
        "gender": "Male",
        "phone": "+212 350 565 2749"
      }]
      const deleteRecord = () => {
        data.filter(() => Element.id == data.map((ele)=> ele.id))
      }
  return (
    <>
      <div className="h-full w-full flex align-middle justify-center" >
        <table className=" mt-16 border border-separate border-spacing-1  p-2 border-sky-200  ">
          <thead className="border border-sky-200 border-spacing-1 ">
            <tr className=" text-white">
              <td className=" m-1 p-1">No</td>
              <td>Id</td>
              <td>First Name</td>
              <td>LastName</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
         { data.map((Element) => {
        return(
            <tr key={Element.id} className="text-white border border-white">
              <td className=" border border-white border-spacing-1 ">{Element.id}</td>
              <td className=" border border-white border-spacing-1 ">{Element.first_name}</td>
              <td className=" border border-white border-spacing-1 ">{Element.last_name}</td>
              <td className=" border border-white border-spacing-1 ">{Element.email}</td>
              <td className=" border border-white border-spacing-1">{Element.gender}</td>
              <td className=" border border-white border-spacing-1 ">{Element.phone}</td>
              <td className=" border border-white  border-spacing-1">
                <button className=" border border-white p-2 text-white m-1  bg-green-300">Edit</button>
                <button className=" border border-white text-white m-1  p-2 bg-red-300"
                onClick={deleteRecord}>Delete</button>
              </td>
            </tr>
        )
      })}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tablee;
