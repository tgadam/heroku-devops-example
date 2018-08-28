import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Color {
    @PrimaryColumn("varchar", { length: 200 })
    code: string;

    @Column("varchar", { length: 400 })
    name: string;
}
