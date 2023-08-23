from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post


class PostListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='user1', password='pass1')

    def test_can_list_posts(self):
        user1 = User.objects.get(username='user1')
        Post.objects.create(owner=user1, title='title 1')
        response = self.client.get('/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data, len(response.data))

    def test_logged_in_user_can_create_post(self):
        self.client.login(username='user1', password='pass1')
        response = self.client.post('/posts/', {'title': 'title 1'})
        count = Post.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_post(self):
        response = self.client.post('/posts/', {'title': 'title 2'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class PostDetailViewTests(APITestCase):
    def setUp(self):
        user1 = User.objects.create_user(username='user1', password='pass1')
        user2 = User.objects.create_user(username='user2', password='pass2')
        Post.objects.create(owner=user1, title='title 1', content='user1 content')
        Post.objects.create(owner=user2, title='title 2', content='user2 content')

    def test_can_retrieve_post_using_valid_id(self):
        response = self.client.get('/posts/1/')
        self.assertEqual(response.data['title'], 'title 1')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_post_using_invalid_id(self):
        response = self.client.get('/posts/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_can_update_own_post(self):
        self.client.login(username='user1', password='pass1')
        response = self.client.put('/posts/1/', {'title': 'title 1 updated'})
        post = Post.objects.filter(pk=1).first()
        self.assertEqual(post.title, 'title 1 updated')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_cant_update_other_user_post(self):
        self.client.login(username='user2', password='pass2')
        response = self.client.put('/posts/1/', {'title': 'title new by user2'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
