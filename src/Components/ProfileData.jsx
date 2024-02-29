    import React from "react";
    import Button from "react-bootstrap/Button";
    import Col from "react-bootstrap/Col";
    import Form from "react-bootstrap/Form";
    import Row from "react-bootstrap/Row";

    const ProfileData = () => {
    return (
        <div className="container mt-5 p-3">
            <h3 className="text-center">Please Complete Your Profile Data</h3>
            <Form className="profile-data-container mx-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="dob" />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Blood Type</Form.Label>
                        <Form.Select defaultValue="Blood Type..." name="blood-type">
                            <option>Choose...</option>
                            <option>A</option>
                            <option>B</option>
                            <option>AB</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Drug Allergiries</Form.Label>
                <Form.Select defaultValue="Drug Allergiries..." name="drug-allergies">
                    <option>Choose...</option>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                </Form.Select>
            </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Food Allergiries</Form.Label>
                        <Form.Select defaultValue="Food Allergiries..." name="food-allergies">
                            <option>Choose...</option>
                            <option>A</option>
                            <option>B</option>
                            <option>AB</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 row-cols-2">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Gender..." name="gender">
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
            </Form.Group>
                <Form.Group className="position-relative mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                type="file"
                required
                name="file"
                />
            </Form.Group>
                </Row>

                <Row className="mb-3 row-cols-2">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Height in cm</Form.Label>
                        <Form.Control name="height" type="number" placeholder="Enter Your Height" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Weight in kg</Form.Label>
                        <Form.Control name="weight" type="number" placeholder="Enter Your Weight" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="m-auto d-flex">
                Submit
                </Button>
            </Form>
        </div>
    );
    };

    export default ProfileData;
