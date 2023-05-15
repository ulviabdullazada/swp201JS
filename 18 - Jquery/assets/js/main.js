//js - querySelector(All), document.getElements| TagName, ClassName, Name| ById
//jquery - $()

// console.log(document.querySelectorAll('li'));
// console.log($('li'));

// const listItems = document.querySelectorAll('li');

// listItems.forEach(li=>{
//     li.addEventListener('click', function() {
//         console.log(li.innerText);
//     })
// })

// $('li').click(function(){
//     console.log($(this).text());
// })

// $('.a, .d, .c').click(function(){
//     $(this).toggleClass('salam adf')
// })

// $('button').click(function(){
//     // $('img').attr('src',$('input').val())
//     // $('input').val('')
//     // $('img').fadeToggle('slow');
//     $('img').animate({'width':'0px'},1000, function(){
//         $('button').animate({'margin-left':'100px'},1000);
//     });
//     // $('img').animate({'width':'500px'},1000);
// })
// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:0,
//         dots:true,
//         nav:true,
//         // autoplay:true,
//         // autoplayTimeout:1000,
//         items:5
//     })
// })
// $('button').click(function(){
//     Swal.fire({
//         title: 'Do you want to save the changes?',
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: 'Save',
//         denyButtonText: `Don't save`,
//       }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//           Swal.fire('Saved!', '', 'success')
//         } else if (result.isDenied) {
//           Swal.fire('Changes are not saved', '', 'info')
//         }
//       })
// })
ScrollReveal().reveal('.headline');