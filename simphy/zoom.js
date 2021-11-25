        var variable_max=800;
        var variable_min=0;
        var variable_max_x=800;
        var variable_min_x=0
        var variable_max_y=800;
        document.onkeydown=fun;
        // var zoom_in=document.getElementById('zoom-in');
        // zoom_in.onmousedown=zoom_in_func;
        // function zoom_in_func(ev){
        //     variable_min=variable_min-10;
        //     variable_max=variable_max-10;
        //     Render.lookAt(render, {
        //         min: { x: variable_min, y: variable_min },
        //         max: { x: variable_max, y: variable_max }
        //     });
        // }
        // var zoom_out=document.getElementById('zoom-out');
        // zoom_out.onmousedown=zoom_out_func;
        // function zoom_out_func(ev){
        //     variable_min=variable_min+10;
        //     variable_max=variable_max+10;
        //     Render.lookAt(render, {
        //         min: { x: variable_min, y: variable_min },
        //         max: { x: variable_max_x, y: variable_max }
        //     });
        // }
        var left=document.getElementById('left');
        left.onmousedown=left_func;
        function left_func(ev){
            variable_max_x=variable_max_x+10;
            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max_x, y: variable_max_y}
            });
        }
        var right=document.getElementById('right');
        right.onmousedown=right_func;
        function right_func(ev){
            variable_max_x=variable_max_x-10;
            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max_x, y: variable_max_y}
            });
        }
        var zoom_in=document.getElementById('zoom-in');
        zoom_in.onmousedown=zoom_in_func;
        function zoom_in_func(ev){
            variable_max_y=variable_max_y-10;
            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max_x, y: variable_max_y}
            });
        }
        var zoom_out=document.getElementById('zoom-out');
        zoom_out.onmousedown=zoom_out_func;
        function zoom_out_func(ev){
            variable_max_y=variable_max_y+10;
            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max_x, y: variable_max_y}
            });
        }
        function fun(ev){
            if(ev.code=="ArrowRight"){
                variable_max_x=variable_max_x-10;
                // variable_min=variable_min+10;
             }
            if(ev.code=="ArrowLeft"){
                variable_max_x=variable_max_x+10;
            }
            // if(ev.code=="ArrowLeft"){
            //     variable_max=variable_max-10;
            //     variable_min=variable_min-10;
            // }
            // if(ev.code=="ArrowDown"){
            //     variable_min=variable_min-10;
            // }

            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max, y: variable_max_x}
            });
        }
        Render.lookAt(render, {
            min: { x: variable_min, y: variable_min },
            max: { x: variable_max, y: variable_max }
        });