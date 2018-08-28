import { Entity, PrimaryColumn, Column } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
@Entity()
@ObjectType()
export class Color {
    @Field(type => ID)
    @PrimaryColumn("varchar", { length: 200 })
    code: string;

    @Field()
    @Column("varchar", { length: 400 })
    name: string;
}
