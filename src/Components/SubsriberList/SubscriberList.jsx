
import { useLoaderData } from "react-router-dom";
const SubscriberList = () => {
    const allSubscriber = useLoaderData();

  
    
    return (
        <div className="mx-20 p-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SERIAL</th>
        <th>PHOTO (SUBSCRIBER)</th>
        <th>NAME (SUBSCRIBER)</th>
        <th>EMAIL (SUBSCRIBER)</th>
       
        
      </tr>
    </thead>
    <tbody>
    {
                            allSubscriber.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.userProfilePic} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.userName}
                                </td>
                                <td>{item.email}</td>
                             
                            </tr>)
                        }


  
  
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default SubscriberList;
