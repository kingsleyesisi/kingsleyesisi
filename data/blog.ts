export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
  category: string
  featured?: boolean
  published?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "django-security",
    title: "Essential Security Practices for Django Applications",
    excerpt: "Implementing robust security measures in your Django projects to protect against common vulnerabilities.",
    content: `
      <p>Django provides a robust security foundation, but it's essential to understand and implement additional security measures to protect your applications from evolving threats. This post covers essential security practices every Django developer should implement.</p>
      
      <h2>1. Keep Django and Dependencies Updated</h2>
      
      <p>Security vulnerabilities are regularly discovered and patched in Django and its dependencies. Always use the latest stable version of Django and regularly update your project dependencies using tools like pip-audit or safety.</p>
      
      <h2>2. Properly Configure Settings</h2>
      
      <p>Django's default settings are secure, but you should review and customize them for your specific needs:</p>
      
      <ul>
        <li>Set DEBUG = False in production</li>
        <li>Configure ALLOWED_HOSTS properly</li>
        <li>Use strong SECRET_KEY values and keep them secret</li>
        <li>Enable CSRF protection</li>
        <li>Configure secure cookie settings</li>
      </ul>
      
      <h2>3. Implement Proper Authentication</h2>
      
      <p>Authentication is your first line of defense. Consider these practices:</p>
      
      <ul>
        <li>Use Django's built-in authentication system</li>
        <li>Implement multi-factor authentication for sensitive applications</li>
        <li>Use password validation to enforce strong passwords</li>
        <li>Implement proper password reset flows</li>
        <li>Consider using OAuth or JWT for API authentication</li>
      </ul>
      
      <h2>4. Protect Against Common Vulnerabilities</h2>
      
      <p>Django provides protection against many common vulnerabilities, but you should understand how they work:</p>
      
      <ul>
        <li>SQL Injection: Use Django's ORM and avoid raw queries</li>
        <li>XSS: Use Django's template system and escape user input</li>
        <li>CSRF: Use Django's CSRF protection middleware</li>
        <li>Clickjacking: Configure X-Frame-Options header</li>
        <li>HTTPS: Use HTTPS everywhere and configure HSTS</li>
      </ul>
      
      <h2>5. Implement Rate Limiting</h2>
      
      <p>Protect your application from brute force attacks and DoS by implementing rate limiting on authentication endpoints and API routes. Libraries like django-ratelimit can help with this.</p>
      
      <p>By implementing these security practices, you can significantly improve the security posture of your Django applications and protect your users' data from potential threats.</p>
    `,
    date: "2025-05-15",
    readingTime: "5 min read",
    tags: ["Django", "Security", "Python", "Web Development"],
    category: "Security",
    featured: true,
    published: true,
  },
  {
    id: "ml-django-integration",
    title: "Integrating Machine Learning Models with Django",
    excerpt: "A step-by-step guide to deploying and serving machine learning models in Django applications.",
    content: `
      <p>Django's flexibility makes it an excellent framework for deploying machine learning models in production. This guide walks through the process of integrating ML models with Django applications.</p>
      
      <h2>Approaches to ML Integration</h2>
      
      <p>There are several ways to integrate ML models with Django:</p>
      
      <ul>
        <li>Direct integration: Load models directly in Django</li>
        <li>API-based: Separate ML service with API endpoints</li>
        <li>Task queue: Process predictions asynchronously</li>
      </ul>
      
      <h2>Direct Integration</h2>
      
      <p>For simpler models, you can load them directly in your Django application:</p>
      
      <pre><code>
# In your Django app
import joblib
from django.conf import settings
import os

# Load model once when the server starts
MODEL_PATH = os.path.join(settings.BASE_DIR, 'ml_models', 'model.pkl')
model = joblib.load(MODEL_PATH)

# In your view
def predict(request):
    # Get input data from request
    input_data = process_input(request.POST)
    
    # Make prediction
    prediction = model.predict([input_data])[0]
    
    # Return result
    return JsonResponse({'prediction': prediction})
      </code></pre>
      
      <h2>API-Based Approach</h2>
      
      <p>For more complex models or better separation of concerns, consider creating a separate ML service:</p>
      
      <ol>
        <li>Create a Flask/FastAPI service for ML predictions</li>
        <li>Deploy it separately from your Django application</li>
        <li>Use HTTP requests from Django to get predictions</li>
      </ol>
      
      <h2>Asynchronous Processing with Celery</h2>
      
      <p>For computationally intensive models, use Celery to process predictions asynchronously:</p>
      
      <pre><code>
# In tasks.py
from celery import shared_task
import joblib

model = joblib.load('model.pkl')

@shared_task
def predict_task(input_data):
    prediction = model.predict([input_data])[0]
    return prediction

# In your view
from .tasks import predict_task

def predict(request):
    input_data = process_input(request.POST)
    
    # Start async task
    task = predict_task.delay(input_data)
    
    # Return task ID
    return JsonResponse({'task_id': task.id})
      </code></pre>
      
      <h2>Model Versioning and Updates</h2>
      
      <p>Consider how you'll handle model updates:</p>
      
      <ul>
        <li>Store models with version information</li>
        <li>Implement A/B testing for new models</li>
        <li>Monitor model performance in production</li>
      </ul>
      
      <p>By following these approaches, you can effectively integrate machine learning capabilities into your Django applications while maintaining scalability and performance.</p>
    `,
    date: "2025-04-22",
    readingTime: "7 min read",
    tags: ["Django", "Machine Learning", "Python", "API"],
    category: "Machine Learning",
    featured: true,
    published: true,
  },
  {
    id: "django-performance",
    title: "Optimizing Django Performance at Scale",
    excerpt: "Advanced techniques to improve the performance of your Django applications for high-traffic scenarios.",
    content: `
      <p>As your Django application grows, performance optimization becomes increasingly important. This post covers advanced techniques to improve the performance of Django applications at scale.</p>
      
      <h2>1. Database Optimization</h2>
      
      <p>The database is often the primary bottleneck in Django applications:</p>
      
      <ul>
        <li>Use select_related() and prefetch_related() to reduce query count</li>
        <li>Create appropriate indexes on your database tables</li>
        <li>Use django-debug-toolbar to identify N+1 query problems</li>
        <li>Consider using raw SQL for complex queries</li>
        <li>Implement database connection pooling</li>
      </ul>
      
      <h2>2. Caching Strategies</h2>
      
      <p>Implement caching at various levels:</p>
      
      <ul>
        <li>Use Django's cache framework with Redis or Memcached</li>
        <li>Implement per-view caching for expensive views</li>
        <li>Use template fragment caching for reusable components</li>
        <li>Consider low-level caching for specific functions</li>
      </ul>
      
      <h2>3. Asynchronous Processing</h2>
      
      <p>Move time-consuming tasks out of the request-response cycle:</p>
      
      <ul>
        <li>Use Celery for background task processing</li>
        <li>Implement message queues for event-driven architecture</li>
        <li>Consider Django Channels for WebSockets and async tasks</li>
      </ul>
      
      <h2>4. Static Files Optimization</h2>
      
      <p>Optimize your static files delivery:</p>
      
      <ul>
        <li>Use a CDN for static file delivery</li>
        <li>Implement proper caching headers</li>
        <li>Minify and compress CSS and JavaScript</li>
        <li>Use django-compressor or similar tools</li>
      </ul>
      
      <p>By implementing these optimization techniques, you can significantly improve the performance of your Django applications, providing a better user experience even as your application scales to handle more users and data.</p>
    `,
    date: "2025-03-10",
    readingTime: "6 min read",
    tags: ["Django", "Performance", "Optimization", "Scaling"],
    category: "Performance",
    featured: false,
    published: true,
  },
  {
    id: "python-security",
    title: "Python Security Best Practices",
    excerpt: "Essential security considerations for Python developers to build more secure applications.",
    content: `
      <p>Python's simplicity and extensive ecosystem make it a popular choice for development, but it's important to follow security best practices to build secure applications. This post covers essential security considerations for Python developers.</p>
      
      <h2>1. Dependency Management</h2>
      
      <p>Vulnerabilities in third-party packages can affect your application's security:</p>
      
      <ul>
        <li>Regularly update dependencies to patch security vulnerabilities</li>
        <li>Use tools like safety, pip-audit, or Snyk to scan for vulnerable packages</li>
        <li>Pin dependency versions in requirements.txt or Pipfile.lock</li>
        <li>Consider using virtual environments to isolate dependencies</li>
      </ul>
      
      <h2>2. Input Validation and Sanitization</h2>
      
      <p>Never trust user input:</p>
      
      <ul>
        <li>Validate all input data against expected formats</li>
        <li>Use type hints and validation libraries like Pydantic</li>
        <li>Sanitize data before using it in sensitive operations</li>
        <li>Be especially careful with file operations and command execution</li>
      </ul>
      
      <h2>3. Secure Data Storage</h2>
      
      <p>Protect sensitive data:</p>
      
      <ul>
        <li>Never hardcode secrets in your source code</li>
        <li>Use environment variables or secure vaults for secrets</li>
        <li>Hash passwords using strong algorithms like bcrypt or Argon2</li>
        <li>Encrypt sensitive data at rest</li>
      </ul>
      
      <h2>4. Preventing Common Vulnerabilities</h2>
      
      <p>Be aware of and protect against common security issues:</p>
      
      <ul>
        <li>SQL Injection: Use parameterized queries or ORM</li>
        <li>XSS: Sanitize output in web applications</li>
        <li>CSRF: Implement proper token validation</li>
        <li>Deserialization vulnerabilities: Be careful with pickle and similar libraries</li>
      </ul>
      
      <p>By following these security best practices, you can significantly reduce the risk of security vulnerabilities in your Python applications and protect your users' data from potential threats.</p>
    `,
    date: "2025-08-18",
    readingTime: "8 min read",
    tags: ["Python", "Security", "Best Practices", "Cybersecurity"],
    category: "Security",
    featured: false,
    published: true,
  },
]

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured && post.published)
}

export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.published)
}

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id)
}

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.published)
}

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag) && post.published)
}