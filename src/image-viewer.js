/**
 * This module provides a set of functions to create and navigate through a set
 * of images.  The user can go to the next or previous image, or jump to a
 * specific image.

 * Pedro Mariano 2016 mariano.pedro@gmail.com
 */


function image_viewer_create (image_viewer_id, image_data)
{
    var image_viewer_element = document.getElementById (image_viewer_id);
    var img_element = "<img id=\"" + image_viewer_id + "_img\" src= \"" + image_data [0].url + "\">";
    var button_next_element = "<button id=\"" + image_viewer_id + "_next\" onClick=\"image_viewer_next(
    image_viewer_element.innerHTML = 
}
