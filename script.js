
const selectSeat = document.getElementById('select-seat');
const count = document.getElementById('count');
const abalebleSeat = document.getElementById('abalable-seat');
const totalCost = document.getElementById('total-cost');
const noSeat = document.getElementById('no-seat');
const couponField = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const grandTotal = document.getElementById('grand-total');
const mobileField = document.getElementById('mobile-field');
const nextBtn = document.getElementById('next-btn');


// array count 
const seatCount = [];
let totalPrice = 0;

function addBtnClick(event) { 

    // akta seat jate doibar click korle na add hoi tar jonno ei code 
    if(seatCount.includes(event.innerText)){
     alert('Seat is already booked');
     return;
    
    }
    // else if er modde condition holo jodi 4 seat opore book kora jabe na 
    else if(seatCount.length < 4){
    // btn click color change
    event.classList.toggle('bg-green-600');
    event.classList.toggle('text-white');

    // count 
    seatCount.push(event.innerText);
    count.innerText = seatCount.length;

    // abalable seat
    const abalebleSeatvalue = parseFloat(abalebleSeat.innerText);
    const newAbalebleSeat = abalebleSeatvalue - 1;
    abalebleSeat.innerText = newAbalebleSeat;


    // atate click korle no booked seat hidden hoye jabe 
    noSeat.classList.add('hidden');

    selectSeat.innerHTML += `<li class="font-bold text-base grid grid-cols-3">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>450</span>
    </li>`


    // total cost
    totalPrice += 450;
    totalCost.innerText = totalPrice.toFixed(2);

    // cupon button 

    if(seatCount.length > 3){
        couponField.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
    }
    }else{
        alert('Maximum 4 seats can be booked');
    }


}


// coupon button 

    couponBtn.addEventListener('click', function(){
        const couponCode = couponField.value.toUpperCase();
        let couponSave = 0;

        if(couponCode !== 'NEW15' && couponCode !== 'COUPLE20'){
            alert('Please enter valid coupon code');
            return;
        }
        if(couponCode === 'NEW15'){
            couponSave = totalPrice * 0.15;
        }else if(couponCode === 'COUPLE20'){
            couponSave = totalPrice * 0.20;
        }

        const hideCoupon = document.getElementById('hide-coupon');
        hideCoupon.innerHTML = `
        <div class="grid grid-cols-3 font-bold">
        <p>Discount</p>
        <p class="font-bold">=</p>
        <p>-BDT : ${couponSave.toFixed(2)}</p>
        </div>
        `

        const grandTotalPrice = totalPrice - couponSave;
        grandTotal.innerText = grandTotalPrice.toFixed(2);

  
        
    });

    // next button modal show 

    mobileField.addEventListener('input', function(e){
        const inputValue = e.target.value;

        if(inputValue.length === 11){
           nextBtn.removeAttribute('disabled');
        }else if(inputValue.length >= 12){
            nextBtn.setAttribute('disabled', '');
        }
    });

    // relod page 

    document.getElementById('reload').addEventListener('click', function(){
        window.location.reload();
    });