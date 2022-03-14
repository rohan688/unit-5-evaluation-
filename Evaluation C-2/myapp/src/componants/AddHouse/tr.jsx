export const Trdata=(data)=>{
    return(
        <>
        <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.owner}</td>
            <td>{data.address}</td>
            <td>{data.code}</td>
            <td>{data.rent}</td>
            <td>{data.preferred}</td>
            </tr>
        </>
    )
}