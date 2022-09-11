function Button({ buttonName, onClickFunction }) {
    function handleClick() {
      onClickFunction();
    }
    return (
      <section class="apply" id="apply">
        <h1>Add New Order</h1>
        <form name="form" id="form" action="postjobprocess.php" method="POST">
          <p class="form">
            <label for="orderid" class="label-name">
              <span class="content-name">Order ID : </span>
            </label>
            <input
              type="text"
              name="orderid"
              placeholder=" eg. XAS8EHJ"
              id="orderid"
              //maxLength="5"
              required="required"
              //pattern="[A-Z0-9]{5}"
            />
          </p>
          <p class="form">
            <label for="memberid" class="label-name">
              <span class="content-name">Member ID : </span>
            </label>
            <input
              type="text"
              name="memberid"
              placeholder=" Enter member's email or mobile number"
              id="memberid"
              //maxlength="20"
              required="required"
            />
          </p>
          <div>
            <input
              class="submit_btn"
              type="submit"
              name="submit"
              value="Add Order"
            />
          </div>
        </form>
      </section>
    );
  }
  
  export default Button;
  