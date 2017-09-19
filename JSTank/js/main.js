/**
 * Created by wokustrzyk on 06.09.2017.
 */

define((require)=>{
    let Scene = require('./scene')
    let scene = new Scene(800, 600);

    scene.initScene();
    scene.main();
});