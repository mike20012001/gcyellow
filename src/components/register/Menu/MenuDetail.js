import React from 'react'

function MenuDetail(props) {
    return (
            <tbody>
                <tr>
                    <td>{props.restaurant}</td>
                    <td>{props.category}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td><img src={props.photo} width='50' height='50' alt="foodPhoto" /></td>
                    <td>{props.promo ? "있음" : "없음"}</td>
                </tr>
            </tbody>
    )
}

export default MenuDetail
