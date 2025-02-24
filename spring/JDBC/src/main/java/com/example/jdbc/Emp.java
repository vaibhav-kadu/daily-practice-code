package com.example.jdbc;

public class Emp {
	private int id;
    private String name;
    private String email;
    private String contact;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	@Override
	public String toString() {
		return "Emp [id=" + id + ", name=" + name + ", email=" + email + ", contact=" + contact + "]";
	}
    
    
}

# commit on 2025-02-25 00:00:00
