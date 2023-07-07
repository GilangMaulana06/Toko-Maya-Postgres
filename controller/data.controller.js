const pool = require('../database')

const getData = async (req, res) => {
    console.log('GET DATA')
    // try {
    //     const data = await pool.query(
    //         `SELECT * FROM data`
    //     )
    //     res.json(data.rows).status(200)
    // } catch (err) {
    //     res.status(400).send(err.message)
    // }
    res.json({message: 'INI PESAN'})
}

const insertData = async (req, res) => {
    console.log('INSERT DATA')
    const { nama_item, type, ukuran, modal, harga_ecer, harga_grosir } = req.body
    try {
        const data = await pool.query(
            `
            INSERT 
            INTO 
                data (nama_item, type, ukuran, modal, harga_ecer, harga_grosir) 
            VALUES 
                ('${nama_item}', '${type}', '${ukuran}', '${modal}', '${harga_ecer}', '${harga_grosir}')
            RETURNING 
                id, nama_item, type, ukuran, modal, harga_ecer, harga_grosir
            `
        )
        res.json(data.rows).status(200)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

const updateData = async (req, res) => {
    console.log('UPDATE DATA')
    const { id, nama_item, type, ukuran, modal, harga_ecer, harga_grosir } = req.body
    try {
        const data = await pool.query(
            `
            UPDATE 
                data
            SET 
                nama_item = '${nama_item}', type = '${type}', ukuran = '${ukuran}', modal = '${modal}', harga_ecer = '${harga_ecer}', harga_grosir = '${harga_grosir}'
            WHERE 
                id = '${id}'
            RETURNING 
                Id, nama_item, type, ukuran, modal, harga_ecer, harga_grosir
            `
        )
        res.json(data.rows).status(200)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

const deleteData = async (req, res) => {
    console.log('DELETE DATA')
    const { id } = req.body
    try {
        const data = await pool.query(
            `DELETE FROM data WHERE id='${id}'`
        )
        res.send({ message: 'Delete Success' }).status(200)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}