| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Status  |
|---|---|---|---|---|---|---|
|SP1|Check Sign Up Page functionality|1. Navigate to http://localhost:8000 <br> 2. Click Sign Up Button <br> 3. Set full name <br> 4. Set valid email <br> 5. Set valid password <br> 6. Confirm with the same password 7. Click Register button | 3. = Mane Poghosian <br> 4. = tester@gmail.com <br> 5. = testPassword <br> 6. = testPassword | Alert box "You have successfully registered!" Pressing "ok" should redirect to Home page http://localhost:8000| Expected result | Pass | 
|SP2|Check Sign Up Page functionality | 1. Navigate to http://localhost:8000 <br> 2. Click Sign Up Button <br> 3. Set full name <br> 4. Set already taken email <br> 5. Set valid password <br> 6. Confirm with the same password <br> 7. Click Register button | 3. = Mane Poghosian <br> 4. = tester@gmail.com <br> 5. = testPassword <br> 6. = testPassword | Error message "Email has already been taken" | Expected Result | Pass |
|SP3|Check Sign Up Page functionality|
|SP4|Check Sign Up Page functionality|
|SP5|Check Sign Up Page functionality|
