import {
    Resolver,
    Query
} from "type-graphql";

@Resolver()
export class HelloWorldResolver {

    @Query(returns => String)
    async helloWorld(): Promise<String> {
        return "Hello World!";
    }

}
