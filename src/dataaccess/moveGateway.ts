import mysql from 'mysql2/promise'

export class MoveGateway {
    async insert(
        conn: mysql.Connection,
        turnId: number,
        disc: number,
        x: number,
        y: number
    ) {
        const moveInsertResult = await conn.execute<mysql.ResultSetHeader>(
            'insert moves (turn_id, disc, x, y) values (?, ?, ?, ?)',
            [turnId, disc, x, y]
        )
    }
}