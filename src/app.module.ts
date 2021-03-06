import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsModule } from './modules/ingredients.module';
import { RecipeModule } from './modules/recipe.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [IngredientsModule,RecipeModule,MongooseModule.forRoot('mongodb+srv://Users:ohAjcIDRhhP7Teaa@dbcluster.biesc.mongodb.net/myRecipeManager?retryWrites=true&w=majority'), SharedModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
