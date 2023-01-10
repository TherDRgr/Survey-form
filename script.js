document.body.innerHTML = 
`
    <label>
      Choose a fruit:
      <select class="fruit" name="fruit">
        <option value="">Select One …</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>
    </label>
    <div class="result"></div>
`
const fruit = document.querySelector('.fruit');

fruit.addEventListener('change', function(event){
  const result = document.querySelector('.result');
  result.textContent = `You chose ${event.target.value}`; });