<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->get();
        return Inertia::render('Article', [
            'articles' => $articles
        ]);
    }

    public function show(Article $article)
    {
        return Inertia::render('ShowArticle', [
            'article' => $article
        ]);
    }

    public function create()
    {
        return Inertia::render('CreateArticle');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'body' => 'required'
        ]);

        Article::create($validated);
        return redirect('/article');
    }
}
