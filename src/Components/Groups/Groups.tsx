import DeleteGroup from "./DeleteGroup";
import AddGroup from "./addGroup";
import UpdateGroup from "./updateGroup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Shared/Loading/Loading";
import { baseUrl } from '../../ApiUtls/ApiUtls';


export default function Groups() {

  const [groupsList, setGroupsList] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const { headers } = useSelector((state: any) => state.userData)


  //******** const modals add,update,delete*******//
  const [modalState, setModalState] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [group, setGroup] = useState(null);

  const handleAddModal = () => {
    setModalState("add");
    setIsOpen(true);
  };
  const handleUpdateModal = (group: any) => {
    setModalState("update");
    setGroup(group);
    setIsOpen(true);
  };
  const handleDeleteModal = (id: any) => {
    setModalState("delete");
    setId(id);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //*****to get all groups******* */
  const getGroups = () => {
    setIsLoading(true)
    axios.get(`${baseUrl}/group`, headers)
      .then((response) => {
        console.log(response);
        setGroupsList(response.data)
      })
      .catch((err) => {
        console.log(err);

      })
      .finally(() => {
        setIsLoading(false)
      })


  }

  useEffect(() => {
    getGroups()
  }, [])



  return (
  <>
 
    <div>
      <div className=" flex justify-end  pt-3 ">
        <div className="rounded-3xl border border-black text-center  w-40 mt-2 mr-4 ">
          <i className="fa-solid fa-circle-plus"></i>
          <button
            onClick={handleAddModal}
          >Add Group</button>
        </div>
      </div>
      <div className="p-3">
        <div className="border rounded-2xl ">
          <h3 className="ml-12 py-2 font-semibold">groups List</h3>
          <div className="grid grid-cols-2 p-2">
       
              {groupsList.map((group)=> (
                
                <div key={group?._id} className="p-2">
                  <div className="flex justify-between align-middle border rounded py-2 px-3">
                    <div>
                      <h3 className="font-semibold">Group : {group?.name}</h3>
                      <h5 className="text-zinc-700 text-sm pt-2">No. of students : {group?.students.length} </h5>
                    </div>
                    <div className="pt-2">
                      <span className="px-1">
                        <i
                          onClick={() => { handleUpdateModal(group) }} className="fa-regular fa-pen-to-square"></i>
                      </span>
                      <span className="px-1">
                        <i onClick={() => { handleDeleteModal(group._id) }} className="fa-regular fa-trash-can"></i>
                      </span>

                    </div>
                  </div>
                </div>
              
              ))}
            
         



          </div>
          

        </div>
      </div>
    </div>
    
    {modalState === "add" ? (
        <AddGroup
          getGroups={getGroups}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      ) : (
        ""
      )}

      {modalState === "update" ? (
        <UpdateGroup
          getGroups={getGroups}
          isOpen={isOpen}
          onClose={handleCloseModal}
          group={group}
        />
      ) : (
        ""
      )}

      {modalState === "delete" ? (
        <DeleteGroup
          getGroups={getGroups}
          isOpen={isOpen}
          onClose={handleCloseModal}
          id={id}
        />
      ) : (
        ""
      )}
  </>
  )
}
