import { useEffect, useState } from "react"

interface newMenu {
    id: string;
    name: string
}

export default function CardSandbox() {
    const menu = [
        { "id": "996756", "name": "Ayam Kecap Manis" },
        { "id": "362342", "name": "Nasi Goreng Spesial" }
    ]

    const [newMenu, setNewmenu] = useState<newMenu>()

    const setLocalStorage = () => {
        if(!localStorage.getItem('menus')) {
            localStorage.setItem('menus', JSON.stringify(menu))
        }
        localStorage.getItem('menus')
    }

    useEffect(() => {
        setLocalStorage()
    }, [])

    return (
        <div>
            <input type="text" />
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}