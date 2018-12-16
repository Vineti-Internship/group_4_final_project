| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|
|BT01|Check buying a ticket| 1.Log In as a user <br> 2.Select a flight from flight table <br> 3. Click buy a ticket | - | Alert box with text "Are you sure you want to buy this ticket" and buttons "Cancel" and "OK" | Expected Result | Pass |
|BT02|Check buying a ticket| After Test Case BT01 click button "Cancel" | - | Alert box closes and the flight page remains | Expected Result | Pass |
|BT03|Check buying a ticket| After Test Case BT01 click button "OK" | - | Alert box closes <br> Redirect to users profile, where a user can see the tickets he bought | Redirected to user profile, but no tickets shown | Fail |