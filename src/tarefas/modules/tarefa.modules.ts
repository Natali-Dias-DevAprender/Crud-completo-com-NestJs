/* eslint-disable prettier/prettier */
import { Module } from "module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tarefa } from "../entities/tarefa.enty";

@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class TarefaModule {}