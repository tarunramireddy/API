import { test, expect } from '@playwright/test';
import { RequestWrapper } from '../../lib/api/request-wrapper';
import { env } from '../../lib/config/env';

test.describe('Users API', () => {
    let api: RequestWrapper;

    test.beforeEach(async ({ request }) => {
        api = new RequestWrapper(request);
    });



    test('should get list of users', async () => {

        const startTime = Date.now();
        const response = await api.get(`${env.BASE_URL}/api/users`, { page: 2 });
        const responseTime = Date.now() - startTime;

        // Assertions with better error messages
        expect(response.status(), 'Response should be successful').toBe(200);
        
        const body = await response.json();
        expect(body.page, 'Page number should match request').toBe(2);
        expect(body.data, 'Should return user data').toBeDefined();
        expect(body.data.length, 'Should have users in the response').toBeGreaterThan(0);
        expect(body.total_pages, 'Should have total pages info').toBeDefined();
        
        // Performance assertion
        expect(responseTime, 'Response time should be under 3 seconds').toBeLessThan(3000);
    });

    test('should create a new user', async () => {

        const newUser = {
            name: 'morpheus',
            job: 'leader'
        };
        
        const startTime = Date.now();
        const response = await api.post(`${env.BASE_URL}/api/users`, newUser);
        const responseTime = Date.now() - startTime;

        expect(response.status(), 'User should be created successfully').toBe(201);
        
        const body = await response.json();
        expect(body.name, 'Response should contain correct name').toBe(newUser.name);
        expect(body.job, 'Response should contain correct job').toBe(newUser.job);
        expect(body.id, 'Response should contain user ID').toBeDefined();
        expect(body.createdAt, 'Response should contain creation timestamp').toBeDefined();
        
        // Validate ID format
        expect(typeof body.id, 'User ID should be a string').toBe('string');
        expect(body.id.length, 'User ID should not be empty').toBeGreaterThan(0);
    });

    test('should update a user', async () => {

        const userId = '2';
        const updatedUser = {
            name: 'morpheus',
            job: 'zion resident'
        };
        
        const startTime = Date.now();
        const response = await api.put(`${env.BASE_URL}/api/users/${userId}`, updatedUser);
        const responseTime = Date.now() - startTime;

        expect(response.status(), 'User should be updated successfully').toBe(200);
        
        const body = await response.json();
        expect(body.name, 'Updated name should match').toBe(updatedUser.name);
        expect(body.job, 'Updated job should match').toBe(updatedUser.job);
        expect(body.updatedAt, 'Response should contain update timestamp').toBeDefined();
    });

    test('should delete a user', async () => {

        const userId = '2';
        
        const startTime = Date.now();
        const response = await api.delete(`${env.BASE_URL}/api/users/${userId}`);
        const responseTime = Date.now() - startTime;

        expect(response.status(), 'User should be deleted successfully (No Content)').toBe(204);
        
        // Verify no response body for 204
        const responseText = await response.text();
        expect(responseText, 'Delete response should be empty').toBe('');
    });
});
