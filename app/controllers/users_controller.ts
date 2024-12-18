// import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Users from '#models/user'


export default class UsersController {
    getAll({request}) {
          console.log(request.input('name'))
          //return db.from('users')
          return Users.all()
      }
    
    insertData({request}){
        let $data = request.all();
        let fullname = $data.fullname;
        let email = $data.fullname;
        let password = $data.fullname;

        var datetime = new Date();
        let date_created = datetime;
        let date_updated = datetime;
        
       return db
        .table('users')
        .returning('id')
        .insert({
          full_name: fullname,
          email: email,
          password: password,
          created_at : date_created,
          updated_at : date_updated
        })
    }

    updateData(){
        return Users.query().where('id', 1).update({ full_name : 'test' })

    }

    deleteData({request}){
        let $id = request.all();
        $id = $id.id;
        return Users.query().where('id', $id ).delete()
    }
}