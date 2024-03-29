import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @UseGuards(JwtGuard)
    @Get(':id')
    public async getUserPorfile(@Param("id") id: number){
        return this.userService.findById(id)
    }
}
