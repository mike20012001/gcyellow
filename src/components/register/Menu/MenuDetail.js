import React from 'react'

function MenuDetail(props) {
    return (

            <tbody>
                <tr>
                    <td>{props.restaurant}</td>
                    <td>{props.category}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.photo ? "있음" : "없음"}</td>
                    <td>{props.review.length > 0 ? "있음" : "없음"}</td>
                    <td>{props.promo ? "있음" : "없음"}</td>
                </tr>
            </tbody>

    )
}

export default MenuDetail
