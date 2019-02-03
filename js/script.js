$(document).ready(function(){
// ========== TODO LIST=================================================
	let inputTask = $('#input-task')

	$('#add-btn').click(function(e){
		e.preventDefault()
		if( inputTask.val() == ''){
			$('.notice').text('Please input Something First..')
		}else{
			$('.notice').text('')
			$('.task-list').append(`<p> <input type="text" value="${inputTask.val()}" disabled> <button class="btn btn-primary editBtn">Edit</button><button class="btn btn-success saveBtn">Save</button><button class=" deleteBtn btn btn-danger">Delete</button></p>`),
			deleteBtn(),
			editBtn(),
			saveBtn(),
			inputTask.val("")
		}
	})

	function deleteBtn(){

		$('.deleteBtn').click(function(e){
			e.preventDefault()
			$(this).parent('p').remove()
		})
	}

	function editBtn(){

		$('.editBtn').click(function(e){
			e.preventDefault()
			$(this).siblings('input').removeAttr('disabled').css({'border':'1px solid lightblue'}),
			$(this).css({'display':'none'}),
			$(this).siblings('.saveBtn').css({'display':'inline'})
		})
	}

	function saveBtn(){
		$('.saveBtn').click(function(e){
			e.preventDefault()
			$(this).siblings('input').attr('disabled',true).css({'border':'none'}),
			$(this).css({'display':'none'}),
			$(this).siblings('.editBtn').css({'display':'inline'})
		})
	}

	deleteBtn()
	editBtn()
	saveBtn()
//=========END OF TODO LIST =====================================================================

//=========SIMPLE CALCULATOR=====================================================================

	$('.addBtn').click(function(){
		let firstNum = Number($('#input-num-1').val())
		let secondNum = Number($('#input-num-2').val())
		let answer = firstNum + secondNum
		$('.answer h2').text(answer.toFixed(2))
	})

	$('.subtractBtn').click(function(){
		let firstNum = Number($('#input-num-1').val())
		let secondNum = Number($('#input-num-2').val())
		let answer = firstNum - secondNum
		$('.answer h2').text(answer.toFixed(2))
	})

	$('.multiplyBtn').click(function(){
		let firstNum = Number($('#input-num-1').val())
		let secondNum = Number($('#input-num-2').val())
		let answer = firstNum * secondNum
		$('.answer h2').text(answer.toFixed(2))
	})

	$('.divideBtn').click(function(){
		let firstNum = Number($('#input-num-1').val())
		let secondNum = Number($('#input-num-2').val())
		let answer = firstNum / secondNum
		$('.answer h2').text(answer.toFixed(2))
	})

	$('.powerBtn').click(function(){
		let firstNum = Number($('#input-num-1').val())
		let secondNum = Number($('#input-num-2').val())
		let answer = Math.pow(firstNum , secondNum)
		$('.answer h2').text(answer.toFixed(2))
	})
//=========END OF SIMPLE CALCULATOR================================================================

//===========ODD OR EVEN ===============================================

	$('.testOddEven').click(function(){
		let testNum = Number($('#test-input').val())
		let test = parseInt($('#test-input').val())
		let result = 0;

		if(testNum % 2 == 0){
			$('.oddEven h2').text(`${testNum} is an Even Number`)
		}else{
			$('.oddEven h2').text(`${testNum} is an Odd Number`)
		}

		for (var i = 1 ; i <= test; i++){
          	if (test % i == 0){
          	    result ++;
          	}
        }
         
	    if (result == 2){
	  	    $(".oddEven small").text("it is also a prime number")
	    }else{
	        $(".oddEven small").text("but it is not a prime number")
	    };
	})
//===========END ODD OR EVEN ===============================================

//===========LEAP YEAR =========================================================
	$('.testYear').click(function(){
		let testYear = parseInt($('#year-input').val())
		if(testYear % 4 == 0 && testYear % 100 != 0  || testYear % 400 == 0){
			$('.leapYear h2').text(`${testYear} is a Leap Year.`)
		}else{
			$('.leapYear h2').text(`${testYear} is not a Leap Year.`)
		}
	})
//===========END OF LEAP YEAR =========================================================

//===========CONVERSION=============================================================

	$('#peso').keyup(function(){
		let pesoVal = $('#peso')
		$('#usd').val( pesoVal.val() * 0.019)
		$('#yen').val(pesoVal.val() * 2.09)
	})

	$('#usd').keyup(function(){
		let usdVal = $('#usd')
		$('#peso').val( usdVal.val() / 0.019)
		$('#yen').val( usdVal.val() / 0.0091)
	})

	$('#yen').keyup(function(){
		let yenVal = $('#yen')
		$('#peso').val( yenVal.val() / 2.09)
		$('#usd').val( yenVal.val() * 0.0091)
	})

//===========END OF CONVERSION=============================================================
})