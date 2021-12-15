/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    imagem: string;

    @IsNotEmpty()
    @IsString()
    bio: string;
    
    @IsNotEmpty()
    @IsString()
    nascimento: string;

    @IsNotEmpty()
    @IsInt()
    seguidoresid: number;

    @IsNotEmpty()
    @IsInt()
    seguindoid: number;

    @IsNotEmpty()
    @IsString()
    criado_em: string;

    @IsNotEmpty()
    @IsString()
    modificado_em: string;

    @IsNotEmpty()
    @IsInt()
    tweetid: number;
}
