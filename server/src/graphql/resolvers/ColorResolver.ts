import {
    Resolver,
    Query
} from "type-graphql";
import { Color } from "../../data-model/entities/color";
import { getRepository } from "typeorm";

@Resolver(Color)
export class ColorResolver {
    @Query(returns => [Color])
    colors(): Promise<Color[]> {
        const repo = getRepository(Color);
        return repo.find();
    }
}