<html lang="en">
<head>
<meta charset="utf-8">
<title>RMIT Cinema</title>
<link rel="stylesheet" type="text/css" href="css/bookingcss.css">
<link rel="stylesheet" type="text/css" href="css/background.css">

<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="js/myjs.js"></script>
<script src="js/bookingJS.js"></script>
</head>
<body>
	<div class="wrapper">
		<?php
		include_once ("header.php");
		include_once 'navigator.php';
		?>
		<div class="body-wrapper">
			<form action="bookingAction.php" method="post" id="mBookingForm">
				<div class="booking-wrapper" onclick="calculatePrice();">
					<label for="movie-name"> Movie Name</label> <select name="movie_name"
						id="movie-name" class="input-area">
						<option>please select</option>
						<option>Ant Man</option>
						<option>Force of Destiny</option>
						<option>Ben-Hur</option>
						<option>A Walk in the Woods</option>
					</select> <label for="movie-day"> Session Day</label> <select
						name="movie_day" id="movie-day" class="input-area">
						<option>please select</option>
						<option></option>
						<option></option>
						<option></option>
						<option></option>
						<option></option>
						<option></option>
						<option></option>
					</select> <label for="movie-time"> Session Time</label> <select
						 name="movie_time"  id="movie-time" class="input-area">
						<option>please select</option>
						<option></option>

					</select> <label></label> <br> <span class="hidden-error"
						id="error-movie-select"> you have to select movie and chose time</span></label>
					<table>

						<tr>
							<th>Ticket Type</th>
							<th>Quanity</th>
							<th>Subtotal</th>
						</tr>


						<tr>

							<td>Adult</td>
							<td><select id="SA-quanity" name="SA_quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="SA_display"
								id="SA-display" /></td>

						</tr>

						<tr>
							<td>Concession</td>
							<td><select id="SP-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="SP"
								id="SP-display" /></td>

						</tr>

						<tr>
							<td>Child</td>
							<td><select id="SC-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="SC"
								id="SC-display" /></td>

						</tr>

						<tr>
							<td>First Class Adult</td>
							<td><select id="FA-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="FA"
								id="FA-display" /></td>


						</tr>

						<tr>
							<td>First Class Child</td>
							<td><select id="FC-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="FC"
								id="FC-display" /></td>

						</tr>
						<tr>
							<td>Beanbag -1 Person</td>
							<td><select id="B1-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="B1"
								id="B1-display" /></td>

						</tr>
						<tr>
							<td>Beanbag - 2 Person</td>
							<td><select id="B2-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="B2"
								id="B2-display" /></td>

						</tr>
						<tr>
							<td>Beanbag - 3 Person</td>
							<td><select id="B3-quanity" class="input-area">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
							</select></td>
							<td><input type="text" class="input-area" name="B3"
								id="B3-display" /></td>

						</tr>
						<tr>
							<td></td>
							<td>Total Price</td>
							<td><input type="text" class="input-area" id="total_price" /></td>
						</tr>
					</table>
				</div>
				<span class="hidden-error" id="error-ticket-select"> you have to
					pick up some tickets</span>
				<div class="q-button">
					<a href="#" id="mCF_submit" onclick="actionFormSubmit();"><div
							class="submit-button">Add Cart</div></a>
				</div>
			</form>
		</div>
		
			
		<?php
		include_once 'footer.php';
		?>
		<?php 
		function addToCart(){
			echo "<script type='text/javascript'>alert('submitted successfully!')</script>";
		}
		?>
	</div>
</body>
</html>